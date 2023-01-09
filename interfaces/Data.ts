export interface DataResponse {
  data: Datum[];
}

export interface Datum {
  namePage: string;
  media: Media[];
}

export interface Media {
  url: string;
}
