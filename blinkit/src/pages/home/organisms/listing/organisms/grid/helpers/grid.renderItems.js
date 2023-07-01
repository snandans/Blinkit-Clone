import Card from "../organisms/card/Card"

function renderRowWiseItems(row, index) {
    return (<div className="flex" key={index}>
        {row.map((item) => (
            <Card
                key={item.id}
                element={item}
            />
        ))}
    </div>)
}
export function renderItems(rows) {
    return (
        rows.map((row, index) => (
            renderRowWiseItems(row, index)
        ))
    )
}