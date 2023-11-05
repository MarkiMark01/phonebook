export const Filter = ({ filter, handleFilterChange }) => {
    return (
        <div>
            <input type="text" value={filter} onChange={handleFilterChange} placeholder="Filter contacts" />
        </div>
    )
}