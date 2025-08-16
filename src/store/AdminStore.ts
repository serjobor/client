import { makeAutoObservable } from "mobx";
import AdminService from "../services/AdminService";

export default class AdminStore {
  sopdText = {} as string;

  templateSubject = {} as string;
  templateBody = {} as string;

  constructor() {
    makeAutoObservable(this);
  }

  setSopdText(sopdText: string) {
    this.sopdText = sopdText;
  }

  setTemplateSubject(templateSubject: string) {
    this.templateSubject = templateSubject;
  }

  setTemplateBody(templateBody: string) {
    this.templateBody = templateBody;
  }

  // setLetterTemplate(templateSubject: string, templateBody: string) {
  //   this.templateSubject = templateSubject;
  //   this.templateBody = templateBody;
  // }

  //добавляем в стор текст СОПД
  async getSOPDText() {
    try {
      const response = await AdminService.getSOPDText();
      // const response = {
      //   data: {
      //     sopdText: 'test sopdText1'
      //   }
      // };
      console.log(response);
      this.setSopdText(response.data.sopdText);
    } catch (e :any) {
      console.log(e.response?.data?.message);
      throw e;
    }
  };

  //отправляем запрос на сервер для сохранения текста СОПД
  async saveSOPDText(sopdText: string) {
    try {
      const response = await AdminService.saveSOPDText(sopdText);
      // const response = sopdText;
      console.log(response);
    } catch (e :any) {
      console.log(e.response?.data?.message);
      throw e;
    }
  };

  //добавляем в стор шаблона письма
  async getLetterTemplate() {
    try {
      const response = await AdminService.getLetterTemplate();
      // const response = {
      //   data: {
      //     templateSubject: 'test templateSubject',
      //     templateBody: 'test templateBody'
      //   }
      // };
      console.log(response);
      this.setTemplateSubject(response.data.templateSubject);
      this.setTemplateBody(response.data.templateBody);
      // this.setLetterTemplate(response.data.templateSubject, response.data.templateBody);
    } catch (e :any) {
      console.log(e.response?.data?.message);
      throw e;
    }
  };

  //отправляем запрос на сервер для сохранения шаблона письма
  async saveLetterTemplate(templateSubject: string, templateBody: string) {
    try {
      // const response = await AdminService.saveLetterTemplate(templateSubject, templateBody);
      const response = {
        templateSubject: `${templateSubject}`,
        templateBody: `${templateBody}`
      };
      console.log(response);
    } catch (e :any) {
      console.log(e.response?.data?.message);
      throw e;
    }
  };

};
