import { AddCount, SubCount } from '../../../../../../../../../../redux/actions/action'

export const handleOnClick = (check, id, dispatch) => {
    if (check) {
        dispatch(AddCount(id));
    }
    else
        dispatch(SubCount(id))
}