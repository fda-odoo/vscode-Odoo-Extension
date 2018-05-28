# vscode odoo-extension

This project will contain all the changes I did to my visual studio code to make the develepment of Odoo easier. However, even if it is personal changes, it stays public as this is principaly new highligting or other features rthat are not just configuration

## Functionalities

### A) Snippets

The extension provide some snipets to help you to type faster:

#### Fields snippets

When you want to type a new field in your model, you can type "fields.", and you'll get a list of available odoo fields.
However, this list will only create a basic fields when choosing one. If you want a full version of the field, you can write "afields." to 
see the list of advanced fields. Again, not all parameters are created here, but the last ones are for really advanced users. 

Example of Basic snippet:

~~~~
variable = fields.Boolean('Field_name', required=False, readonly=False, help='')
~~~~

You can change each part of this line by simply pressing tab

Example of Advanced snippet (on multi-line):

~~~~
variable = fields.Boolean(
    string='',",
    required=False,
    readonly=False,
    compute='_',
    search='_',
    readonly=False,
    index=False,
    default=False,
    store=False,
    help=False
)
~~~~

### B) Linting related to odoo stuff

*In Development*

## For more information

Simply contact fda@odoo.com