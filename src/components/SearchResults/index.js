const SearchResults = ({data}) => {

    if(!data || !data.length) return null;

    const resultList = data.map((item, index) => {
        const { _id, title } = item;
        const delay = `${index + 1}00ms`;
        return (
            <li key={_id} style={{ '--delay': delay }}>
                <span>{title}</span>
            </li>
        );
    });
    return (
        <div className='search-results'>
            <ul>{resultList}</ul>
        </div>
    );
}

export default SearchResults;