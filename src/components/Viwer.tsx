export default function Viewer(props: { url?: string } = {}) {
    return (
        <div className="viewer">
            <iframe src={props.url} />
        </div>
    );
}
