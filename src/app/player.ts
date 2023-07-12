export interface Player {
    name: String;
    jerseyNumber: number;
    position: String;
    dob: Date;
    age: number;
    height: String;
    weight: number;
    birthplace: String;
    shootsRight: boolean;
    captain: boolean;
    alternate: boolean;
    draft: Array<String>;
    imgUrl: String;
}