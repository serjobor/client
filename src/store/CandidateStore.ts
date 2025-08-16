import { makeAutoObservable } from "mobx";
import CandidateService from "../services/CandidateService";
import type { ICandidate, IStatus } from "../types/ICandidate";

export default class CandidateStore {
  candidateData: ICandidate = {
    candidateMail: '',
    candidateFirstName: '',
    candidateLastName: '',
    candidateFatherName: '',
    candidateBirthDate: '',
    candidatePhone: '',
    // requestState?: string
  };

  candidateToken = '';
  candidateStatus = {} as IStatus;

  constructor() {
    makeAutoObservable(this);
  }

  setCandidateData(candidateData: ICandidate) {
    this.candidateData = candidateData;
  }

  setCandidateToken(candidateToken: string) {
    this.candidateToken = candidateToken;
  }

  setCandidateStatus(candidateStatus: IStatus) {
    this.candidateStatus = candidateStatus;
  }

  //запроc на получение cтатуcа у токена кандидата
  async getStatusToken() {
    try {
      const response = await CandidateService.getStatusToken(this.candidateToken);
      // const response: { data: IStatus } = {
      //   data: {
      //     status: 'pending'
      //   }
      // };
      console.log(response);
      this.setCandidateStatus(response.data);
    } catch (e: any) {
      console.log(e.response?.data?.message);
      throw e;
    }
  };

  //запроc на изменение данных о кандидате
  async sendCandidateData() {
    try {
      const response = await CandidateService.sendCandidateData(this.candidateData);
      // const response = this.candidateData;
      console.log(response);
    } catch (e: any) {
      console.log(e.response?.data?.message);
      throw e;
    }
  };
};
