# stagetool-ui

## Test Data
The test data can be found here: https://github.com/Turku-BioImaging/stagetool-ui/tree/main/src/tests/images.
This data is also found on the deployed homepage, under the `TRY STAGETOOL` section.
To run the test images, simply click on them on the homepage. 

### Input
Whole-testis DAPI-stained cross-section image slices of size 1024 * 1024 px.

### Output
* Resulting image: Detected tubule data overlaid over the input image
* Json file of the resulting detected tubule data

## Deployment
`cp .env.example .env` and then modify the configuration.
```
docker build . -t stagetool-ui
docker compose up
``` 
