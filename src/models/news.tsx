import { v4 as uuid } from "uuid";
interface News {
   id: number;
   title: string;
   content: string;
   user_id: typeof uuid;
   publish_date: Date;
   likes: number;
   created_at: Date;
   updated_at: Date;
}

export default News;
