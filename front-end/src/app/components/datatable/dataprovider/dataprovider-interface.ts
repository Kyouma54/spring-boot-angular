import { HttpParams } from "@angular/common/http";

export interface DataProvider {
    load(): Promise<any>;
    reset(): void;
	getParams(): HttpParams;
}