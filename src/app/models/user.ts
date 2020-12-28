import {Flags} from '../models/Flags'

  
    export class Link {
        id: string;
        name: string;
        address: string;
    }
  
    export class Location {
        name: string;
        country: string;
        latitude: number;
        longitude: number;
        timezone: string;
        timezoneOffSet: number;
    }
  
    export class Person {
        professionalHeadline: string;
        completion: number;
        showPhone: boolean;
        created: Date;
        verified: boolean;
        flags: Flags;
        weight: number;
        locale: string;
        subjectId: number;
        picture: string;
        hasEmail: boolean;
        name: string;
        links: Link[];
        location: Location;
        theme: string;
        id: string;
        pictureThumbnail: string;
        claimant: boolean;
        summaryOfBio: string;
        weightGraph: string;
        publicId: string;
    }
  
    export class Stats {
        strengths: number;
        awards: number;
        education: number;
        interests: number;
        jobs: number;
    }
  
    export class Strength {
        id: string;
        code: number;
        name: string;
        weight: number;
        recommendations: number;
        media: any[];
        created: Date;
    }
  
    export class Interest {
        id: string;
        code: number;
        name: string;
        media: any[];
        created: Date;
    }
  
    export class Organization {
        id: number;
        name: string;
        picture: string;
    }
  
    export class Experience {
        id: string;
        category: string;
        name: string;
        organizations: Organization[];
        responsibilities: string[];
        fromMonth: string;
        fromYear: string;
        toMonth: string;
        toYear: string;
        highlighted: boolean;
        weight: number;
        verifications: number;
        recommendations: number;
        media: any[];
        rank: number;
        additionalInfo: string;
    }
  
    export class Organization2 {
        id: number;
        name: string;
        picture: string;
    }
  
    export class Award {
        id: string;
        category: string;
        name: string;
        organizations: Organization2[];
        responsibilities: any[];
        fromMonth: string;
        fromYear: string;
        toMonth: string;
        toYear: string;
        highlighted: boolean;
        weight: number;
        verifications: number;
        recommendations: number;
        media: any[];
        rank: number;
    }
  
    export class Organization3 {
        id: number;
        name: string;
        picture: string;
    }
  
    export class Job {
        id: string;
        category: string;
        name: string;
        organizations: Organization3[];
        responsibilities: string[];
        fromMonth: string;
        fromYear: string;
        highlighted: boolean;
        weight: number;
        verifications: number;
        recommendations: number;
        media: any[];
        rank: number;
        toMonth: string;
        toYear: string;
        additionalInfo: string;
    }
  
    export class Organization4 {
        id: number;
        name: string;
        picture: string;
    }
  
    export class Education {
        id: string;
        category: string;
        name: string;
        organizations: Organization4[];
        responsibilities: any[];
        fromMonth: string;
        fromYear: string;
        toMonth: string;
        toYear: string;
        highlighted: boolean;
        weight: number;
        verifications: number;
        recommendations: number;
        media: any[];
        rank: number;
    }
  
    export class Opportunity {
        id: string;
        interest: string;
        field: string;
        data: any;
    }
  
    export class Language {
        code: string;
        language: string;
        fluency: string;
    }
  
    export class Group {
        id: string;
        order: number;
        median: number;
        stddev: number;
    }
  
    export class Analysis {
        groupId: string;
        analysis: number;
    }
  
    export class PersonalityTraitsResults {
        groups: Group[];
        analyses: Analysis[];
    }
  
    export class Group2 {
        id: string;
        text: string;
        answer: string;
        order: number;
    }
  
    export class Analysis2 {
        groupId: string;
        section: string;
        analysis: number;
    }
  
    export class ProfessionalCultureGenomeResults {
        groups: Group2[];
        analyses: Analysis2[];
    }
  
    export class RootPerson {
        person: Person;
        stats: Stats;
        strengths: Strength[];
        interests: Interest[];
        experiences: Experience[];
        awards: Award[];
        jobs: Job[];
        projects: any[];
        publications: any[];
        education: Education[];
        opportunities: Opportunity[];
        languages: Language[];
        personalityTraitsResults: PersonalityTraitsResults;
        professionalCultureGenomeResults: ProfessionalCultureGenomeResults;
    }
  