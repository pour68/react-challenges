const sortByStringColumnNameAsc = (columnName, collection) => {
    let sortedCollection = [...collection].sort((a, b) =>{
        if (typeof a[columnName] === "string") {
            return a[columnName].toLowerCase() > b[columnName].toLowerCase() ? 1 : -1;
        } else {
            return a[columnName] > b[columnName] ? 1 : -1;
        }
    });

    return sortedCollection;
}

const sortByStringColumnNameDesc = (columnName, collection) => {
    let sortedCollection = [...collection].sort((a, b) => {
        if (typeof a[columnName] === "string") {
            return a[columnName].toLowerCase() < b[columnName].toLowerCase() ? 1 : -1;
        } else {
            return a[columnName] < b[columnName] ? 1 : -1;
        }
    });

    return sortedCollection;
}

export { sortByStringColumnNameAsc, sortByStringColumnNameDesc };