export default function SystemLoading() {
	return (
		<div className="system-loading" role="status" aria-live="polite">
			<div aria-hidden="true"><i /><i /><i /><b /></div>
			<p>Assembling portfolio space<span>...</span></p>
		</div>
	);
}
