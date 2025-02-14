import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { QhButtonComponent } from './qh-button.component';

export default {
    title: 'QH Button',
    component: QhButtonComponent,
    decorators: [
        moduleMetadata({
            imports: [
            ]
        })
    ],
    argTypes: {
        state: {
            control: 'select',
            options: ['regular', 'danger'], // Allowed state options
        },
        type: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary'], // Allowed type options
        },
        icon: {
            control: 'select',
            options: ['no icon', 'leading', 'trailing', 'only icon', 'both'], // Allowed icon options
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'], // Allowed size options
        },
        disabled: {
            control:'boolean',
            options: [true, false], // Allowed disabled options
        },
        theme: {
            control: 'select',
            options: ['light', 'dark'], // Allowed theme options
        },
        click: { action: 'Button clicked' }, // Logs event in Storybook Actions tab
    },
} as Meta;

const Template: Story<QhButtonComponent> = (args) => ({
    component: QhButtonComponent,
    props: args,
    click: action('Button clicked!'), // Logs event in Storybook
});

export const button = Template.bind({});
button.args = {
    state: 'regular',
    type: 'primary',
    icon: 'no icon',
    size: 'medium',
    text: 'Button',
    disabled: false,
    ariaLabel: "button",
    theme: 'light',
};
