# Dimensional Score Card
This is a Qlik Sense Score Card (multi KPI) extension based on "Spectre" css framework. This allows up to 4 measures per card. This takes only 1 Dimension. Users can display avatars based on number of conditions - 

- Fixed avatar for all cards.
- Avatar per dimension values (use the dimension option to define that).
- Conditional Avatar - Display conditional avatars based on measure/s.

Users can also define colours for each measures (static/dynamic).

_IMPORTANT! This extension is part of bundle (Kab's Extension Bundle). Can be used on its own._

# Demo
<p align="center">
  <img width="90%" alt="Dimensional-Score-Card" src="https://github.com/kabir-rab/Dimensional-Score-Card/blob/master/lib/img/dimensional-score-card.gif">
</p>

# How to Install
## Desktop
Download this repo as .zip file. Once downloaded unzip all it's content to the following folder 
> Documents\Qlik\Sense\Extensions\

## Enterprise Server
Download this repo as .zip file. Once downloaded, use the QMC to upload the zip file just like any other extensions.

# How to use
Go to "edit" mode of a Qlik sense app. Then Custom objects > "Kab-s Extension Bundle" > "Dimensional Score Card". Drag this to the work space and select your Dimension. You can add up to 4 Measures. To display avatar for each dimensional value - you will have to upload the avatar/images in the content library and provide the address for each image for each dimension values using a mapping table (see the screenshot below for an example mapping table). Images can be displayed from other internet sources too (ex - twitter profile picture etc). To display just one image/avatar in all cards - Just provide the link to the image file in the settings. 
<p align="center">
  <img width="50%" alt="mapping table" src="https://github.com/kabir-rab/Dimensional-Score-Card/blob/master/lib/img/mapping.png">
</p>

# Known bugs and limitations
 - No option to use the card without dimension. This is by design. I may include an option for this in later date.