export interface DataResponse {
  data: Info[];
}

export interface Info {
  namePage: string;
  media: Media[];
}

export interface Media {
  url: string;
}

export interface ResponseError {
  message: string;
}
