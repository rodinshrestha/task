export type PostData = {
  /** Api hit per page */
  hitsPerPage: number;

  /** Nb Hits   */
  nbHits: number;

  /** Page number */
  page: number;

  /** Api Params */
  params: string;

  /** Api search query */
  query: string;

  /** Post fetch data */
  hits: Array<PostType>;

  /** Post total page number */
  nbPages: number;
};

export type PostType = {
  /** Post author name */
  author: string;

  /** Post title */
  title: string;

  /** Post comment text */
  comment_text: string | null;

  /** Post created date */
  created_at: string;

  /** Created date in number format */
  created_at_i: number;

  /** Post total comments */
  num_comments: number;

  /** Post object id */
  objectID: string;

  /** Post parent id */
  parent_id: string | null;

  /** Post point number */
  points: number;

  /** Post story id */
  story_id: string | null | number;

  /** Post story text */
  story_text: string | null;

  /** Post story title */
  story_title: string | null;

  /** Post url */
  url: string | null;
};
