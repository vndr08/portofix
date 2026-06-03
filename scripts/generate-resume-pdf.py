import json
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    ListFlowable,
    ListItem,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "docs" / "CV_IVANDERJP_ATS.pdf"

EMERALD = colors.HexColor("#059669")
INK = colors.HexColor("#0f172a")
MUTED = colors.HexColor("#475569")
SOFT = colors.HexColor("#f1f5f9")
LINE = colors.HexColor("#cbd5e1")


def load_json(path):
    with open(ROOT / path, "r", encoding="utf-8") as file:
        return json.load(file)


def esc(text):
    return (
        str(text)
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
    )


def link(label, href):
    return f'<link href="{esc(href)}" color="#059669">{esc(label)}</link>'


def bullets(items, style, gap=2):
    return ListFlowable(
        [ListItem(Paragraph(esc(item), style), bulletColor=EMERALD) for item in items],
        bulletType="bullet",
        leftIndent=12,
        bulletIndent=4,
        spaceBefore=2,
        spaceAfter=gap,
    )


def section(title, styles):
    return [
        Spacer(1, 7),
        Paragraph(esc(title).upper(), styles["Section"]),
        HRFlowable(width="100%", thickness=0.6, color=LINE, spaceBefore=2, spaceAfter=6),
    ]


def role_block(title, meta, summary, highlights, tags, styles):
    items = [
        Paragraph(f"<b>{esc(title)}</b>", styles["ItemTitle"]),
        Paragraph(esc(meta), styles["Meta"]),
    ]
    if summary:
        items.append(Paragraph(esc(summary), styles["Body"]))
    if highlights:
        items.append(bullets(highlights[:3], styles["Body"], gap=1))
    if tags:
        items.append(Paragraph(f'<font color="#475569"><b>Tools:</b> {esc(", ".join(tags[:9]))}</font>', styles["Small"]))
    return KeepTogether(items)


def main():
    profile = load_json("json/profile.json")
    resume = load_json("json/resume.json")
    projects = [p for p in load_json("json/data.json")["Projects"] if p.get("show")]
    featured = [p for p in projects if p.get("featured")][:5]

    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=15 * mm,
        leftMargin=15 * mm,
        topMargin=12 * mm,
        bottomMargin=12 * mm,
        title="Ivander Johana Pratama - ATS Resume",
        author=profile["name"],
    )

    base = getSampleStyleSheet()
    styles = {
        "Name": ParagraphStyle(
            "Name",
            parent=base["Heading1"],
            fontName="Helvetica-Bold",
            fontSize=20,
            leading=23,
            textColor=INK,
            alignment=TA_CENTER,
            spaceAfter=3,
        ),
        "Headline": ParagraphStyle(
            "Headline",
            parent=base["BodyText"],
            fontName="Helvetica-Bold",
            fontSize=10.5,
            leading=14,
            textColor=EMERALD,
            alignment=TA_CENTER,
            spaceAfter=5,
        ),
        "Contact": ParagraphStyle(
            "Contact",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=8.3,
            leading=11,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=5,
        ),
        "Pitch": ParagraphStyle(
            "Pitch",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=9.2,
            leading=12.4,
            textColor=INK,
            alignment=TA_CENTER,
            borderWidth=0.6,
            borderColor=LINE,
            borderPadding=7,
            backColor=SOFT,
            spaceAfter=4,
        ),
        "Section": ParagraphStyle(
            "Section",
            parent=base["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=9.8,
            leading=12,
            tracking=0.4,
            textColor=EMERALD,
            spaceAfter=0,
        ),
        "ItemTitle": ParagraphStyle(
            "ItemTitle",
            parent=base["BodyText"],
            fontName="Helvetica-Bold",
            fontSize=9.5,
            leading=12,
            textColor=INK,
            spaceAfter=1,
        ),
        "Meta": ParagraphStyle(
            "Meta",
            parent=base["BodyText"],
            fontName="Helvetica-Bold",
            fontSize=8.3,
            leading=10.5,
            textColor=MUTED,
            spaceAfter=2,
        ),
        "Body": ParagraphStyle(
            "Body",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=8.55,
            leading=11.2,
            textColor=INK,
            alignment=TA_LEFT,
            spaceAfter=2,
        ),
        "Small": ParagraphStyle(
            "Small",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=7.8,
            leading=10,
            textColor=MUTED,
            spaceAfter=2,
        ),
    }

    story = []
    story.append(Paragraph(esc(profile["name"]), styles["Name"]))
    story.append(Paragraph(esc(profile["headline"]), styles["Headline"]))

    contact_parts = [
        esc(profile["location"]),
        link(profile["email"], f"mailto:{profile['email']}"),
        link(profile["phone"], profile["phoneHref"]),
        link("LinkedIn", profile["linkedin"]),
        link("GitHub", profile["github"]),
        link("Portfolio", profile["canonicalUrl"]),
    ]
    story.append(Paragraph(" &nbsp;|&nbsp; ".join(contact_parts), styles["Contact"]))
    story.append(Paragraph(esc(" ".join(resume["summary"])), styles["Pitch"]))

    story.extend(section("Core Strengths", styles))
    strength_rows = [
        [
            Paragraph(f"<b>{esc(group['group'])}</b><br/>{esc(', '.join(group['items']))}", styles["Small"])
            for group in resume["skills"][:2]
        ],
        [
            Paragraph(f"<b>{esc(group['group'])}</b><br/>{esc(', '.join(group['items']))}", styles["Small"])
            for group in resume["skills"][2:4]
        ],
    ]
    table = Table(strength_rows, colWidths=[87 * mm, 87 * mm], hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.white),
                ("BOX", (0, 0), (-1, -1), 0.5, LINE),
                ("INNERGRID", (0, 0), (-1, -1), 0.5, LINE),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    story.append(table)

    story.extend(section("Professional Experience", styles))
    for item in resume["experience"]:
        title = f"{item['role']} - {item['company']}"
        meta = f"{item['period']} | {item['location']}"
        story.append(role_block(title, meta, item["summary"], item["highlights"], item.get("skills", []), styles))
        story.append(Spacer(1, 4))

    story.extend(section("Selected Projects", styles))
    for project in featured:
        title = f"{project.get('role', 'Developer')} - {project['title']}"
        meta = project.get("year", "")
        summary = project.get("summary") or " ".join(project.get("desc", [])[:1])
        highlights = project.get("highlights", [])
        if project.get("impact"):
            highlights = [project["impact"]] + highlights
        story.append(role_block(title, meta, summary, highlights, project.get("tech", []), styles))
        story.append(Spacer(1, 3))

    story.extend(section("Education", styles))
    education = resume["education"]
    story.append(
        role_block(
            f"{education['program']} - {education['school']}",
            f"{education['period']} | Current GPA: {education['gpa']}",
            education["description"],
            [],
            [],
            styles,
        )
    )

    story.extend(section("Leadership, Achievements, and Certifications", styles))
    leadership = [org["summary"] for org in resume["organizations"][:3]]
    achievement_items = resume["achievements"] + leadership
    story.append(bullets(achievement_items[:7], styles["Body"], gap=2))
    cert_text = []
    for group in resume["certifications"]:
        cert_text.append(f"{group['group']}: {', '.join(group['items'])}")
    story.append(Paragraph(f"<b>Certifications:</b> {esc(' | '.join(cert_text))}", styles["Small"]))
    languages = ", ".join([f"{item['language']} ({item['level']})" for item in resume["languages"]])
    story.append(Paragraph(f"<b>Languages:</b> {esc(languages)}", styles["Small"]))

    doc.build(story)
    print(OUTPUT)


if __name__ == "__main__":
    main()
