import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RulingNumberDb } from './ruling-numbers';

export class FakeDbService implements InMemoryDbService {
    createDb(): any {
        return {
            rulingNumbers: RulingNumberDb.rulingNumbers
        };
    }
}
