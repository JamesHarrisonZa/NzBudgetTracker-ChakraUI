import { atom } from 'jotai';
import {
  getCurrentDateThisMonth,
  getFirstOfDateThisMonth,
} from '../../util/get-dates';

export const startDateAtom = atom(getFirstOfDateThisMonth());

export const endDateAtom = atom(getCurrentDateThisMonth());
