import { atom } from 'jotai';
import { getCurrentDateThisMonth, getFirstOfDateThisMonth } from '../../util';

export const startDateAtom = atom(getFirstOfDateThisMonth());

export const endDateAtom = atom(getCurrentDateThisMonth());
