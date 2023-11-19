import { isEmpty, isNull } from 'lodash-es';

export const isNotNull = (value: unknown) => !isNull(value);

export const isNotEmpty = (value: unknown) => !isEmpty(value);
