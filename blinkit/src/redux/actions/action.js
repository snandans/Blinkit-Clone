const AddCount = (id) => {
    return {
        type: 'INCREMENT',
        Id: id
    }
}

const SubCount = (id) => {
    return {
        type: 'DECREMENT',
        Id: id
    }
}

export { AddCount, SubCount };