import { UserType } from "../../redux/users-reducer";

export const updateObjectInArray = (items: UserType[], itemId: string, objPropName: keyof UserType, newObjProps: { followed: boolean }) => {
    return items.map(u => {

        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}