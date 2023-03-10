import { FormStates } from '../models/form-state';

const stateSet = new Set<FormStates>(['success', 'error', 'warning', 'default', 'information']);

/** Checks if the given state is a valid control state. */
export function isValidControlState(value: any): value is FormStates {
    return stateSet.has(value);
}
