interface Failure {
  time: number;
  altitude: null | number;
  reason: string;
}

interface Links {
  patch: {
    small: string;
    large: string;
  };
  reddit: {
    campaign: null | string;
    launch: null | string;
    media: null | string;
    recovery: null | string;
  };
  flickr: {
    small: string[];
    original: string[];
  };
  presskit: null | string;
  webcast: string;
  youtube_id: string;
  article: string;
  wikipedia: string;
}

interface Core {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: null | boolean;
  landing_type: null | string;
  landpad: null | string;
}

export interface Doc {
  fairings: {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ships: string[];
  };
  links: Links;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: Failure[];
  details: string;
  crew: string[];
  ships: string[];
  capsules: string[];
  payloads: string[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: Core[];
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: null | string;
  id: string;
}

export interface APISpaceXResponse {
  docs: Doc[];
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null | number;
  nextPage: number;
}

interface RootObject {
  data: APISpaceXResponse;
}
