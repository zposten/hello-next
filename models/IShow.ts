export type IShow = {
  id:           number,
  url:          string,
  name:         string,
  type:         string,
  language:     string,
  genres:       string[],
  status:       string,
  runtime:      number,
  premiered:    string,
  officialSite: null,
  schedule:     any,
  rating:       {average: number}
  weight:       number,
  network:      any,
  webChannel:   null,
  externals:    any,
  image:        {medium: string, original: string},
  summary:      string,
  updated:      number,
}