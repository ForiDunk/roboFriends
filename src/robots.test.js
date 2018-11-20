import React from 'react';
import { robots } from './robots';

test('robots array', () => {
    expect(robots).toHaveLength(10);
})