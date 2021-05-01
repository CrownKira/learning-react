console.clear();

// People dropping off a form (Action Creators)
const createPolicy = (name, amount) => {
    return { // Action (a form in our analogy)
        type: 'CREATE_POLICY',
        payload: {
            name: name,
            amount: amount
        }
    };
};

const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name: name
        }
    };
};

const createClaim = (name, amountOfMoneyToCollect) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name: name,
            amountOfMoneyToCollect: amountOfMoneyToCollect
        }
    };
};


// Reducers (Departments!)
// the names of the reducer functions are used as keys for the store
// each of them can only update their respective store state
// an action will be sent to the department
// department sees if need update the store based on the action
const claimsHistory = (oldListOfClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        // we care about this action (FORM!)
        return [...oldListOfClaims, action.payload];
    }

    // we don't care the action (form!!)
    return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.amountOfMoneyToCollect;
    } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount;
    }

    return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name];
    } else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => name !== action.payload.name);
    }

    return listOfPolicies;
};

const { createStore, combineReducers } = Redux;

// combine the different departments
const ourDepartments = combineReducers({
    accounting: accounting,
    claimsHistory: claimsHistory,
    policies: policies
});

// create main data storage out of the departments
// make departments the key to the value
// has the necessary methods: dispatch, getstate, etc
//
const store = createStore(ourDepartments); // create store will init all the reducers
// by giving them an action of varying type, so as to get the inital value of all the keys
// eg. {type: "@@redux/PROBE_UNKNOWN_ACTION3.j.i.w.i"}

// createPolicy('Alex', 20)
// createClaim('Alex', 120)
// deletePolicy('Alex')

store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 40));

// store.dispatch(createClaim('Alex', 120));
// store.dispatch(createClaim('Jim', 50));

// store.dispatch(deletePolicy('Bob'));

console.log(store.getState());