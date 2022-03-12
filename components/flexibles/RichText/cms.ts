import type NetlifyCmsField from '../../../interfaces/NetlifyCmsField'

export default <NetlifyCmsField>{
  label: 'Text',
  name: 'rich-text',
  widget: 'object',
  summary: 'Rich text | {{fields.title}}',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: true,
    },
    {
      label: 'Text',
      name: 'text',
      widget: 'markdown',
      required: true,
      buttons: [
        'bold',
        'italic',
        'link',
        'heading-two',
        'heading-three',
        'heading-four',
        'heading-five',
        'heading-six',
        'bulleted-list',
        'numbered-list',
      ],
      editor_components: [],
      modes: ['rich_text'],
    },
    {
      label: 'Alignment',
      name: 'alignment',
      widget: 'select',
      options: ['right', 'left'],
      default: 'left',
      required: true,
    },
    {
      label: 'Heading type',
      name: 'heading',
      widget: 'select',
      options: ['h1', 'h2'],
      default: 'h2',
      required: true,
    },
    {
      label: 'Component',
      name: 'component',
      widget: 'hidden',
      default: 'rich-text',
    },
  ],
}
