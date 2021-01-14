import { field } from '../../../../model/field';

const userDisplayField: field[] = [
	{
		name: 'Identifiant',
		helpTextTitle: 'Identifiant unique du contact',
		helpText: "Il servira pour le rechercher à travers l'annuaire.",
		path: 'username',
		type: 'string',
		modifiable: false,
		tag: 'main',
	},
	{
		name: 'Nom commun',
		helpTextTitle: ' Nom commun du contact ',
		helpText:
			" Il servira pour le rechercher à travers l'annuaire. Caractères autorisés alphabétiques chiffres apostrophes espaces tirets",
		path: 'attributes.commun_name',
		type: 'string',
		modifiable: true,
		tag: 'main',
	},
	{
		name: 'Nom',
		helpTextTitle: 'Nom du contact',
		helpText:
			'Caractères autorisés alphabétiques chiffres apostrophes espaces tirets',
		path: 'lastName',
		type: 'string',
		modifiable: true,
		tag: 'main',
	},
	{
		name: 'Prénom',
		helpTextTitle: 'Prénom du contact',
		helpText:
			'Caractères autorisés alphabétiques chiffres apostrophes espaces tirets',
		path: 'firstName',
		type: 'string',
		modifiable: true,
		tag: 'main',
	},
	{
		name: 'Adresse e-mail',
		helpTextTitle: ' Adresse de messagerie du contact ',
		helpText: "Il servira pour le rechercher à travers l'annuaire.",
		path: 'mail',
		type: 'string',
		modifiable: true,
		tag: 'main',
	},
	{
		name: 'Numéro de téléphone',
		helpTextTitle: ' Numéro de téléphone du contact ',
		helpText:
			'Entre 1 et 25 caractères numériques, points, tirets, parenthèses, signe plus, et espaces uniquement. ',
		path: 'attributes.phone_number',
		type: 'string',
		modifiable: true,
		tag: 'main',
	},
	{
		name: 'Description',
		helpText: ' Description du contact ',
		path: 'attributes.description',
		type: 'string',
		modifiable: true,
		tag: 'main',
	},
	{
		name: 'Organisation',
		helpText: " Organisation d'appartenance de l'agent ",
		path: 'attributes.organisation',
		type: 'string',
		modifiable: true,
		tag: 'main',
	},
	{
		name: 'Dernière modification',
		path: 'metadatas.modifyTimestamp',
		type: 'string',
		modifiable: false,
		tag: 'advanced',
	},
	{
		name: 'Identification du destinataire',
		path: 'address.ligne1',
		type: 'string',
		modifiable: true,
		tag: 'address',
	},
	{
		name: 'N° appartement, boite aux lettres, étage, couloire',
		path: 'address.ligne2',
		type: 'string',
		modifiable: true,
		tag: 'address',
	},
	{
		name: 'Entrée, tour, bâtiment, immeuble, résidence',
		helpTextTitle: 'Identifiant unique du contact',
		helpText: "Il servira pour le rechercher à travers l'annuaire.",
		path: 'address.ligne3',
		type: 'string',
		modifiable: true,
		tag: 'address',
	},
	{
		name: 'Numéro et libellé de la voie',
		helpTextTitle: 'Identifiant unique du contact',
		helpText: "Il servira pour le rechercher à travers l'annuaire.",
		path: 'address.ligne4',
		type: 'string',
		modifiable: true,
		tag: 'address',
	},
	{
		name: 'Lieu dit ou boîte postale ',
		helpTextTitle: 'Identifiant unique du contact',
		helpText: "Il servira pour le rechercher à travers l'annuaire.",
		path: 'address.ligne5',
		type: 'string',
		modifiable: true,
		tag: 'address',
	},
	{
		name: 'Code postal et localité de destination ',
		helpTextTitle: 'Identifiant unique du contact',
		helpText: "Il servira pour le rechercher à travers l'annuaire.",
		path: 'address.ligne6',
		type: 'string',
		modifiable: true,
		tag: 'address',
	},
	{
		name: 'Pays ',
		helpTextTitle: 'Identifiant unique du contact',
		helpText: "Il servira pour le rechercher à travers l'annuaire.",
		path: 'address.ligne7',
		type: 'string',
		modifiable: true,
		tag: 'address',
	},
	{
		name: 'Habilitations',
		helpTextTitle: 'Identifiant unique du contact',
		helpText: "Il servira pour le rechercher à travers l'annuaire.",
		path: 'habilitations',
		type: 'habilitations',
		tag: 'habilitations',
		modifiable: true,
	},
	{
		name: 'Groups',
		helpTextTitle: 'Identifiant unique du contact',
		helpText: "Il servira pour le rechercher à travers l'annuaire.",
		path: 'groups',
		type: 'groups',
		tag: 'habilitations',
		addTitle: 'Ajouter un groupe',
		deleteTitle: 'Supprimer un groupe',
		modifiable: true,
	},
	{
		name: 'Role applicatif',
		helpTextTitle: 'Identifiant unique du contact',
		helpText: "Il servira pour le rechercher à travers l'annuaire.",
		path: 'attributes.roles',
		type: 'list',
		tag: 'habilitations',
		modifiable: true,
		addTitle: 'Ajouter un rôle',
		deleteTitle: 'Supprimer un rôle',
	},
	{
		name: 'Propriétés',
		helpTextTitle: 'Propriétés du contact',
		helpText:
			'Ajouter une propriété à saisir en cliquant sur "Ajouter un champ". Supprimer une propriété saisie en vidant le champ ou en cliquant sur la croix rouge à droite du champ. Aucune limite d\'ajout.',
		path: 'roles',
		type: 'list',
		tag: 'properties',
		modifiable: true,
		addTitle: 'Ajouter une propriété',
		deleteTitle: 'Supprimer une propriété',
	},
];

export default userDisplayField;
