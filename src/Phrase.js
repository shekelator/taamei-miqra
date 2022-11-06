function Phrase(props) {
    const { audioFile, hebrew } = props;
    return (
        <>
        <div className="row">
            <div className="col text-end">
                <span dir="rtl" className="heb-text">{hebrew}</span>
            </div>
            <div className="col text-start">
                <audio controls>
                    <source src={ "https://dnix.nyc2.cdn.digitaloceanspaces.com/recordings/" + audioFile } type="audio/mp3"/>
                </audio>
            </div>
        </div>
        </>);
}

export default Phrase;