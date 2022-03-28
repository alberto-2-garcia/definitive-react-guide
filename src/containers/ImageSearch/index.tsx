import { Field, Form, Formik } from 'formik';
import { FC, useState } from 'react';

type URLs = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

type Links = {
  html: string;
}

type PhotoType = {
  id: string;
  urls: URLs;
  links: Links;
  description: string;
  alt_description: string;
}

const ImageSearch: FC = () => {
  const [photos, setPhotos] = useState<PhotoType[]>([]);
  const open = (url: string) => window.open(url)
  return (
    <div>
      <div>
        <Formik 
          initialValues={{ search: '' }}
          onSubmit={async values => {
            const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
              headers: {
                'Authorization': 'Client-ID qvy2y7fRCE_mIZrDJ8fevnKO8Mm29ZYhiXQSRq70mOw'
              }
            })
            const data = await response.json()
            setPhotos(data.results)
          }}
        >
          <Form>
            <Field name='search' />
          </Form>
        </Formik>
      </div>
      <div className="container">
        <div className="center">
          {photos.map(photo => 
          <article key={photo.id} onClick={() => open(photo.links.html)}>
            <img src={photo.urls.regular} />
            <p>{[photo.description, photo.alt_description].join(' - ')}</p>
          </article>
          )}
        </div>
      </div>
    </div>
  )
}

export default ImageSearch;
