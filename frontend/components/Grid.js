const Grid = ({ entries }) => (
    <ul>
        {entries.map(entry => (
            <li key={entry.id}>
                <div>{entry.speaker}</div>
                <div>{entry.title}</div>
                <div>https://www.youtube.com/watch?v={entry.youtubeId}</div>
                <p>{entry.description}</p>
                <div>As seen on {entry.conference}</div>
            </li>
        ))}
    </ul>
);

export default Grid;
