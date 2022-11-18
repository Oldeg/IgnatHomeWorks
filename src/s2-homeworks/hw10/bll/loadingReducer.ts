

export type InitStateType = {
    isLoading: boolean
}
const initState:InitStateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {isLoading: action.isLoading}
        }

        default:
            return state
    }
}

type LoadingActionType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => ({
    type: 'CHANGE_LOADING',
    isLoading,
} as const )
