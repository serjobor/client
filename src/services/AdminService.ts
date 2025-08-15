import $api from "../http";
import type { AxiosResponse } from "axios";

export interface sopdTextResponse {
    sopdText: string;
};

export interface letterTemplateResponse {
    templateSubject: string;
    templateBody: string;
};

export default class AdminService {
    //запрос на получение текста СОПД
    static async getSOPDText(): Promise<AxiosResponse<sopdTextResponse>> {
        return $api.get<sopdTextResponse>('/sopd/recent');
    };

    //запрос на получение шаблона письма
    static async saveSOPDText(sopdText: string): Promise<void> {
        return $api.post('/sopd', sopdText);
    };

    //запрос на получение шаблона письма
    static async getLetterTemplate(): Promise<AxiosResponse<letterTemplateResponse>> {
        return $api.get<letterTemplateResponse>('/template/recent');
    };

    //запрос на получение шаблона письма
    static async saveLetterTemplate(templateSubject: string, templateBody: string): Promise<void> {
        const data = {
            templateSubject: `${templateSubject}`,
            templateBody: `${templateBody}`
        };
        return $api.post('/template', data);
    };
}