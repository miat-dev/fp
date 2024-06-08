import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
@Injectable({
	providedIn: 'root'
})
export class MserviceService {
	private furl: string = 'http://localhost:8080/song/';
	private options = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};
	constructor(private http: HttpClient) {

	}

	showTodayDate() {
		return new Date();
	}

	fetchMusicPaths(extpath: string = '') {
		return this.http.get(this.furl + extpath, this.options).
			pipe(retry(3), catchError(this.errorHandler))
	}
	private errorHandler(error: HttpErrorResponse) {
		console.log(error)
		return throwError(() => new Error("Error occured Please try again."))
	}
}
