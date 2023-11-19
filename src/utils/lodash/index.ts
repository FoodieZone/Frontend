import { isNull } from 'lodash-es';

export const isNotNull = (value: unknown) => !isNull(value);
