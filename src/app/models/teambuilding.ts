export class TeamBuildingModel {
  constructor(
      public Location: string,
      public CreatorId: string,
      public Participants: string[],
      public Date: string,
      public id?: string,
      public CompanyName?: string,
      public Link?: string
  ) {}
}