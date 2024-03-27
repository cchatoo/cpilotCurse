function skillsMember() {
    return {
        name: 'skillsMember',
        type: 'member',
        path: 'skills',
        title: 'Skills',
        icon: 'fa fa-cogs',
        component: () => import('./components/SkillsMember.vue')
    }
}