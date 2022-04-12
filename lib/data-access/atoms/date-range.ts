import { atom } from 'jotai';
import {
  getCurrentDateThisMonth,
  getFirstOfDateThisMonth,
} from '../../util/get-dates';

export const startDateAtom = atom(getCurrentDateThisMonth());

export const endDateAtom = atom(getFirstOfDateThisMonth());
