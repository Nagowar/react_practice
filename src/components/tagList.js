/* eslint-disable no-use-before-define */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


export default function FixedTags() {
  return (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      options={tags}
      getOptionLabel={option => option.title}
      defaultValue={[tags[6], tags[13]]}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip disabled={index === 0} label={option.title} {...getTagProps({ index })} />
        ))
      }
      style={{ width: 500, margin:'0 auto', marginTop:'20px', }}
      renderInput={params => (
        <TextField
          {...params}
          label="Fixed tag"
          variant="outlined"
          placeholder="Favorites"
          fullWidth
        />
      )}
    />
  );
}


const tags = [
	{title: "Драма"},
	{title: "Мистика"},
	{title: "Sci-Fi"},
	{title: "Роботы"},
	{title: "Преключение"},
	{title: "Семейный"},
 {title: "Анимация"},
	{title: "Экшн"},
{	title: "Фэнтези"},
{	title: "Комедия"},
{	title: "Триллер"},
{	title: "Хоррор"},
{	title: "Магия"},
{	title: "Криминал"},
{	title: "Мюзикл"},
{	title: "Музыка"},
{	title: "Романтика"},
{	title: "История"},
{	title: "Гонки"},
{	title: "Биография"},
{	title: "Спорт"},
{	title: "Война"},
{	title: "Документальный"},
{	title: "Динозавры"}
];
