import { InMemoryDbService } from 'angular-in-memory-web-api';
import { LifePeakDb } from './life-peaks';
import { RulingNumberDb } from './ruling-numbers';

export class FakeDbService implements InMemoryDbService {
    createDb(): any {
        return {
            rulingNumbers: RulingNumberDb.rulingNumbers,
            lifePeaks: LifePeakDb.lifePeaks
        };
    }
}
