import { FormEvent, useState } from "react";
import { API_URL } from "@/config/index";
import styles from "@/styles/Form.module.css";

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

type Props = {
  evtId: number;
  token: string;
  imageUploaded: () => void;
};

export default function ImageUpload({ evtId, imageUploaded, token }: Props) {
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("files", image!);
    formData.append("ref", "events");
    formData.append("refId", evtId.toString());
    formData.append("field", "image");

    const res = await fetch(`${API_URL}/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (res.ok) {
      imageUploaded();
    }
  };

  const handleFileChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.files) {
      setImage(target.files[0]);
    }
  };

  return (
    <div className={styles.form}>
      <h1>Upload Event Image</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.file}>
          <input type="file" onChange={handleFileChange} />
        </div>
        <input type="submit" value="Upload" className="btn" />
      </form>
    </div>
  );
}
