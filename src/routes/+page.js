import category from '$lib/data/category.json' assert { type: 'json' };
import abilityscore from '$lib/data/abilityscore.json' assert { type: 'json' };
import action from '$lib/data/action.json' assert { type: 'json' };
import bonusaction from '$lib/data/bonusaction.json' assert { type: 'json' };
import condition from '$lib/data/condition.json' assert { type: 'json' };
import damage from '$lib/data/damage.json';
import environment from '$lib/data/environment.json' assert { type: 'json' };
import equipment from '$lib/data/equipment.json' assert { type: 'json' };
import freeaction from '$lib/data/freeaction.json' assert { type: 'json' };
import hitpoint from '$lib/data/hitpoint.json' assert { type: 'json' };
import language from '$lib/data/language.json' assert { type: 'json' };
import movement from '$lib/data/movement.json' assert { type: 'json' };
import multiclassing from '$lib/data/multiclassing.json' assert { type: 'json' };
import reaction from '$lib/data/reaction.json' assert { type: 'json' };
import spellcasting from '$lib/data/spellcasting.json' assert { type: 'json' };
import travel from '$lib/data/travel.json' assert { type: 'json' };
import xp from '$lib/data/xp.json' assert { type: 'json' };

/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		category: category,
		abilityscore: abilityscore,
		action: action,
		bonusaction: bonusaction,
		condition: condition,
		damage: damage,
		environment: environment,
		equipment: equipment,
		freeaction: freeaction,
		hitpoint: hitpoint,
		language: language,
		movement: movement,
		multiclassing: multiclassing,
		reaction: reaction,
		spellcasting: spellcasting,
		travel: travel,
		xp: xp,
	};
}
