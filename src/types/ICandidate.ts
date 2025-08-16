export interface ICandidate {
  candidateMail: string,
  candidateFirstName: string,
  candidateLastName: string,
  candidateFatherName: string,
  candidateBirthDate: string,
  candidatePhone: string,
  requestState?: string
};

export interface IStatus {
  status: 'pending' | 'approved' | 'rejected';
};

