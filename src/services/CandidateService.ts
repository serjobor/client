import $api from "../http";
import type { ICandidate, IStatus } from "../types/ICandidate";
import type { AxiosResponse } from "axios";

export default class CandidateService {
    //запроc на получение cтатуcа у токена кандидата
    static async getStatusToken(token: string): Promise<AxiosResponse<IStatus>> {
        return $api.post('/requests/status', { token });
    };

    //запроc на изменение данных о кандидате
    static async sendCandidateData(candidateData: ICandidate): Promise<void> {
        return $api.patch('/requests', candidateData);
    };
}