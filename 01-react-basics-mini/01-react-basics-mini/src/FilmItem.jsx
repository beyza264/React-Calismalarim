function FilmItem({film,onSil}){
    return(
        <li>
            {film}
            <button onClick={onSil}>sil</button>
        </li>
    );
}

export default FilmItem;