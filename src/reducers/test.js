const actionType = 'TEST_MEMBER'

const action = {type:actionType}
//액션생성기
const actionCreator = data => {
    return {type:actionType, data}
}

// const action = actionCreator({})