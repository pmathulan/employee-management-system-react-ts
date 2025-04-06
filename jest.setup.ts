import { TextEncoder, TextDecoder } from 'util';

// Make TextEncoder/TextDecoder available in the test environment
Object.assign(global, { TextDecoder, TextEncoder });

// jest.setup.ts
import '@testing-library/jest-dom';
